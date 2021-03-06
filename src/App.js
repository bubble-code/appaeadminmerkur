import React from 'react';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import AppBar from './component/AppBar';
import { Route, Routes } from 'react-router-dom';
import { Login, Home, GeweteView, SalonesView, AveriasView, AvisosView, ObjectivosView, TecnicosView, ChecklistView, NoMatch, ViewSalones, AveriaViewADD } from './view'
import RequireAuth from './component/RequireAuth'
import RultaPage from './view/RuleraPage';
import 'antd/dist/antd.css';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {
  return (
    <>

      <div>
        <Routes>
          <Route path="/" element={<AppBar />}>
            {/* public routes */}
            <Route path='login' element={<Login />} />
            {/* protect routes */}
            <Route path='/' element={<Home />} />
            <Route path='addAveria/' element={<AveriaViewADD />} />
            <Route path='ruleta/' element={<RultaPage />} />
            <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
              <Route path='gewete/:id' element={<GeweteView />} />
              <Route path='salones/:id' element={<SalonesView />} />
              <Route path='salonesCom' element={<ViewSalones />} />
              <Route path='averias/:id' element={<AveriasView />} />
              <Route path='avisos/:id' element={<AvisosView />} />
              <Route path='objetivos/:id' element={<ObjectivosView />} />
              <Route path='tecnicos/:id' element={<TecnicosView />} />
              <Route path='checklist/' element={<ChecklistView />} />

            </Route>
            {/* catch all */}
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <AppBar/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }
