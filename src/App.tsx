import { AppRouter } from './router/AppRouter';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <AppRouter />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;