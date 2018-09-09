export interface PilotAttrs {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export class Pilot {
  static defaultImageUrl = '/src/assets/pilots-img/unknown-pilot.png';
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

