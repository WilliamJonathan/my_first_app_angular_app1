import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Phrase } from 'src/shared/phrase.model';
import { PHRASES } from './phrase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instruction: string = 'Traduza a frase'
  public phrases: Phrase[] = PHRASES
  public response: string = ''

  public round: number = 0
  public roundPhrase: Phrase

  public progress: number = 0

  public attempts: number = 3

  @Output() public endGame: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.updateRound()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  public updateAnswer(response: Event): void {
    this.response = ( <HTMLInputElement>response.target ).value
    //console.log( this.response )
  }

  public checkAnswer(): void {

    if(this.roundPhrase.phrasePtBr == this.response) {

      //trocar pergunda da rodada
      this.round++
      //incrementa progresso
      this.progress = this.progress + (100 / this.phrases.length)

      //venceu o jogo
      if(this.round === 4) {
        this.endGame.emit('vitoria')
      }

      //atualiza o objeto roundPhrase
      this.updateRound()

    }else{
      //diminuir tentativas
      this.attempts--

      if(this.attempts === -1) {
        this.endGame.emit('derrota')
      }

    }
  }

  public updateRound(): void {
    this.roundPhrase = this.phrases[this.round]
    //limpar resposta
    this.response = ''
  }

}
