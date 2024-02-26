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
  total: number;
  averageCheck: number;
  purchases: number;
}

export type SingleWidgetsResponse = {
  visits: Visits;
  revenue: Revenue;
};
