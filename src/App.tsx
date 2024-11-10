import { fetchEmailEvents } from './services/api';
import EmailCreationForm from './components/EmailCreationForm';
import './App.css';

const App = () => {

  const handleSubmit = async (formData: FormData) => {
    try {
      const data = await fetchEmailEvents(formData);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Email Dashboard</h1>
      </header>
      <main>
        <EmailCreationForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
