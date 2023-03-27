import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energy: EnergyType;
  static instance = 0;

  constructor(n: string) {
    super(n);
    this._energy = 'mana';
    Necromancer.instance += 1; 
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this.instance;
  }
}