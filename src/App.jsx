import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { MyCV } from './App/MyCV/MyCV';
import { FAQ } from './App/FAQ/FAQ';

import { store } from './store';
import { Provider } from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout withSidebar />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="exercises/*" element={<Exercises />} />
            <Route path="blocks/*" element={<Blocks />} />
            <Route path="my-cv/*" element={<MyCV />} />
            <Route path="faq/*" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
