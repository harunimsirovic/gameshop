import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/trackingService';
import { ActionTypes } from '../models/ActionTypes';
import { Games } from '../models/Games';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  constructor(
    private restService: RestService,
    private trackingService: TrackingService
    ) { 

  }

  ngOnInit(): void {
    this.getGames();
  }

  columns = ["Game id", "Name", "Category"];
  index = ["id", "name", "category"]
  categories = ["FPS", "RPG", "VR", "RTS"]
  games: Games[] = []
  filteredGames: Games[] = []
  
  public buyGame(gameName: string, gameCategory: string) {
    this.trackingService.sendData(ActionTypes.GameBought, '', gameName, gameCategory)
  }

  public getGames(category?: string) {
    return this.restService.getGames().subscribe(
      (response) => {
        if (category)
        this.games = response.filter(x => x.category === category)
        else
        this.games = response
      }
    )
  } 

  public filterGame(filter: string) {
    this.trackingService.sendData(ActionTypes.FilteredGame, '', '', '', filter)
  }
}


