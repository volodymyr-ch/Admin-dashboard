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

export type DailyLineChartWidgetResponse = {
  name: string;
  type: string;
  data: [number, number][];
}[];

export type SupportRequestsResponse = {
  name: string;
  email: string;
  product: string;
  price: number;
  date: string;
  city: string;
  status: string;
};

export type Task = {
  id: number;
  title: string;
  type: string;
  time: string
  completed: boolean;
};

export type StatisticWidgetsResponse = Record<'lightBlue' | 'singUp' | 'RNS', {
  total: number;
  registrations: number;
  bonusRate: number;
}>

export type NotificationsItem = {
  id: number;
  title: string;
};
