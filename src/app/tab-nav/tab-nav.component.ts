import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { TrackingService } from 'src/trackingService';
import mixpanel from 'mixpanel-browser';
import { ActionTypes } from '../models/ActionTypes';


/**
 * @title GameShop
 */
@Component({
  selector: 'tab-nav',
  templateUrl: 'tab-nav.component.html',
  styleUrls: ['tab-nav.component.css'],
})
export class TabNavBar implements OnInit{
  constructor(private trackingService: TrackingService) {}

  ngOnInit(): void {
    const options = {
      debug: true
    }
    mixpanel.init('a1d39b908b61571caebfa59a36c86848', options)
  }

  links = [
    {
      path: 'home',
      label: 'Home'
    },
    {
      path: 'games',
      label: 'Game'
    },
    {
      path: 'hardware',
      label: 'Hardware'
    },
    {
      path: 'about',
      label: 'About'
    }
  ]
  activeLink = this.links[0];
  background: ThemePalette = 'primary';

  public track(linkLabel: string) {
    this.trackingService.sendData(ActionTypes.Navigation, linkLabel)
  }

}

