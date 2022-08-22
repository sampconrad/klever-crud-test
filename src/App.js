import './App.scss';
import { Routes, Route, Outlet } from 'react-router-dom';

// PAGES
import Home from './pages/Home.page';
import AddToken from './pages/AddToken.page';
import EditToken from './pages/EditToken.page';

// COMPONENTS
import Logo from './components/Logo/Logo.component';
import StarHead from './components/StarHead/StarHead.component';

// PERSISTENT LAYOUT
const PersistentLayout = () => {
	return (
		<>
			<Logo />
			<StarHead />
			<Outlet />
		</>
	);
};

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PersistentLayout />}>
					<Route index element={<Home />} />
					<Route path="/add-token" element={<AddToken />} />
					<Route path="/edit-token/:id" element={<EditToken />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
