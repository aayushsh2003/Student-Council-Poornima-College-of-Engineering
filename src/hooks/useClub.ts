import { useEffect, useState } from 'react';
import { Club } from '../types/club';

export const useClub = (clubId: string) => {
  const [club, setClub] = useState<Club | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadClub = async () => {
      try {
        const clubData = await import(`../data/clubs/${clubId}.json`);
        setClub(clubData.default);
        setError(null);
      } catch (err) {
        setError('Failed to load club data');
        setClub(null);
      } finally {
        setLoading(false);
      }
    };

    loadClub();
  }, [clubId]);

  return { club, loading, error };
};