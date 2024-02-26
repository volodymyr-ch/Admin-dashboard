export type StatisticWidgetsResponseItem = {
  total: number;
  registrations: number;
  bonusRate: number;
};

export type Visits = {
  total: number;
  logins: number;
  signOut: number;
  rate: number;
};

export type Revenue = {
  name: string;
  y: number;
}[]

export type SingleWidgetsResponse = {
  visits: Visits;
  revenue: Revenue;
};
