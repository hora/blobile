import { Component, OnInit, Input } from '@angular/core';

import * as Color from 'color';

@Component({
  selector: 'bl-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @Input() public team: 'home'|'away'|undefined;
  @Input() public emoji: number;
  @Input() public textColor: string;
  @Input() public teamColor = 'transparent';
  @Input() public name: string;

  constructor() {
    // console.debug('TeamComponent instantiated.');
  }

  async ngOnInit() {
    // console.debug('TeamComponent initialized.');
  }

  getEmoji() {
    return this.emoji? String.fromCodePoint(this.emoji) : undefined;
  }

  getEmojiStyle() {
    return '';
    /*
    let ret = `background-color: ${this.teamColor};`;
    if (this.textColor) {
      ret += `color: ${this.textColor};`;
    }
    return ret;
    */
  }

  getNameStyle() {
    // return `color: ${this.teamColor};`;
    const color = Color(this.teamColor);
    if (color.isLight()) {
      return 'color: black';
    }
    return 'color: white';
  }

  getTeamStyle() {
    let ret = `background-color: ${this.teamColor};`;
    if (this.textColor) {
      ret += `color: ${this.textColor};`;
    }
    return ret;
  }
}
