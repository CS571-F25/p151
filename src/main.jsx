import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SolRankProvider } from './components/SolProfile/SolRankProvider.jsx';
import { SolLoginProvider } from './components/SolProfile/SolLoginProvider.jsx';

createRoot(document.getElementById('root')).render(
<SolLoginProvider>
    <SolRankProvider>
        <App />
    </SolRankProvider>
</SolLoginProvider>
)
