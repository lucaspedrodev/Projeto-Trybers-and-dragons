import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instance += 1;
  }

  static createdRacesInstances():number {
    return this.instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
