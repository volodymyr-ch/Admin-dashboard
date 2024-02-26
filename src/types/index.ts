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

export type Performance = {
  sdk: {
    thisPeriod: number;
    lastPeriod: number;
  };
  integration: {
    thisPeriod: number;
    lastPeriod: number;
  };
}

export type Revenue = {
  name: string;
  y: number;
}[]

export type ServerOverView = {
  percentages: number;
  temperature: number;
  ghz: number;
}[]

export type SingleWidgetsResponse = {
  visits: Visits;
  revenue: Revenue;
  performance: Performance;
  serverOverview: ServerOverView
};
