export interface Qualifier<T> {
  name: T;
  value?: string;
}

export enum NamePartQualifier {
  Title = 'title',
  Primary = 'primary',
  Secondary = 'secondary',
  Middle = 'middle',
  Familiar = 'familiar',
  Religious = 'religious',
  Family = 'family',
  Maiden = 'maiden',
  Patronymic = 'patronymic',
  Matronymic = 'matronymic',
  Geographic = 'geographic',
  Occupational = 'occupational',
  Characteristic = 'characteristic',
  Postnom = 'postnom',
  Particle = 'particle',
  RootName = 'rootName',
}

export enum FactQualifier {
  Age = 'age',
  Cause = 'cause',
  Religion = 'religion',
  Transport = 'transport',
  NonConsensual = 'nonConsensual',
}
