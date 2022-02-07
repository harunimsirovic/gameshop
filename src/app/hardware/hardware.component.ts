import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/trackingService';
import { ActionTypes } from '../models/ActionTypes';
import { Games } from '../models/Games';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-games',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})

export class HardwareComponent implements OnInit {

  constructor(
    private restService: RestService,
    private trackingService: TrackingService
    ) { 

  }

  ngOnInit(): void {
    this.getGames();
  }

  columns = ["VR id", "Name", "Developer"];
  index = ["id", "name", "developer"]
  games: Games[] = []
  filteredGames: Games[] = []
  
  public buyGame(gameName: string, gameCategory: string) {
    this.trackingService.sendData(ActionTypes.GameBought, '', gameName, gameCategory)
  }

  public getGames(category?: string) {
    return this.restService.getHardware().subscribe(
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



