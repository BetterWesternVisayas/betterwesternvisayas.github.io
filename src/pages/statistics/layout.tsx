import { useEffect } from 'react';

export default function StatisticsLayout() {
  useEffect(() => {
    // Navigate to the standalone statistics page
    window.location.href = '/statistics-city.html';
  }, []);

  // Render nothing while redirect occurs
  return null;
}
