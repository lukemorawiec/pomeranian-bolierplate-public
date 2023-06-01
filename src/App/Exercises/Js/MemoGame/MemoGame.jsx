import './MemoGame.css';
import { useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { Board } from './Board/Board';

export function MemoGame() {
  const boardSize = 16;

  return (
    <div className="memo-game">
      <MenuView />
      <Board boardSize={boardSize} />
    </div>
  );
}
