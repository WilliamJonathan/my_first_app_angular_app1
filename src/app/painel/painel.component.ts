import { Component, OnInit } from '@angular/core';

import { Phrase } from 'src/shared/phrase.model';
import { PHRASES } from './phrase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instruction: string = 'Traduza a frase'
  public phrases: Phrase[] = PHRASES
  public response: string = ''

  public round: number = 0
  public roundPhrase: Phrase

  public progress: number = 0

  constructor() {
    this.updateRound()
  }

  ngOnInit(): void {
  }

  public updateAnswer(response: Event): void {
    this.response = ( <HTMLInputElement>response.target ).value
    //console.log( this.response )
  }

  public checkAnswer(): void {

    if(this.roundPhrase.phrasePtBr == this.response) {
      alert('Tradução esta correta')

      //trocar pergunda da rodada
      this.round++
      //incrementa progresso
      this.progress = this.progress + (100 / this.phrases.length)
      //atualiza o objeto roundPhrase
      this.updateRound()

    }else{
      alert('tradução esta errada')
    }
  }

  public updateRound(): void {
    this.roundPhrase = this.phrases[this.round]
    //limpar resposta
    this.response = ''
  }

}
