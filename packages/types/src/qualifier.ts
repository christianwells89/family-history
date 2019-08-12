export interface Qualifier<T> {
  name: T;
  value?: string;
}

export enum NamePartQualifier {
  Title,
  Primary,
  Secondary,
  Middle,
  Familiar,
  Religious,
  Family,
  Maiden,
  Patronymic,
  Matronymic,
  Geographic,
  Occupational,
  Characteristic,
  Postnom,
  Particle,
  RootName,
}

export enum FactQualifier {
  Age,
  Cause,
  Religion,
  Transport,
  NonConsensual,
}
