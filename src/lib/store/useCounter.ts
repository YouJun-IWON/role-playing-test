import { create } from 'zustand';

// localStorage 에 저장하기 

export type ProgressCount = {
  totalCount: number;
  nowCount: number;
  increaseCount: (by: number) => void;
};

export type ProgressPoint = {
  point: number;
  totalPoints: number;
  increasePoint: (by: number) => void;
};

// export type Actions = {
//   addCount: (totalCount: number, nowCount: number) => void;

//   updateCount: (totalCount: string, nowCount: number) => void;
// };

export const useCounterStore = create<ProgressCount>()((set) => ({
  nowCount: 0,
  totalCount: 10,
  increaseCount: (by) =>
    set((state) => ({
      nowCount: state.nowCount + by,
    })),
}));

export const usePointStore = create<ProgressPoint>()((set) => ({
  point: 0,
  totalPoints: 10,
  increasePoint: (by) =>
    set((state) => ({
      point: state.point + by,
    })),
}));
