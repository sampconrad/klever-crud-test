import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

// PROVIDERS
import { GlobalProvider } from './context/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</HashRouter>
);
