import './styles/output.css';
import { useState } from 'react';
import { fetchData } from './services/fetchData';
import { DASHBOARD, AMEND_POLICY_DETAILS, VIEW_DETAILS, DOCUMENTS, PAYMENTS, CLAIMS, MULTICAR_QUOTE, REFERAL, QUOTES } from './constants/ActiveComponents';
import LayoutHeader from './components/layout/Header';
import Dashboard from './components/layout/pages/dashboard/Dashboard';
import { useEffect } from 'react';
import CircularLoader from './components/circularLoader/CircularLoader';
import AmendmentsPage from './components/layout/pages/amendments/Amendments';
import PolicyDetailsPage from './components/layout/pages/policyDetails/PolicyDetails';
import QuotesPage from './components/layout/pages/quotes/QuotesPage';
import DocumentsPage from './components/layout/pages/documents/DocumentsPage';
import PaymentsPage from './components/layout/pages/payments/PaymentsPage';
import ClaimsPage from './components/layout/pages/claims/ClaimsPage';


function App() {
  const [policyInformation, setPolicyInformation] = useState();
  const [activeComponent, setActiveComponent] = useState(DASHBOARD);
  useEffect(() => {
    const fetchDataFromServer = async () => {
      const recievedData = await fetchData();
      setPolicyInformation(recievedData);
    }
    fetchDataFromServer();
  }, [])



  return (
    <div className="App">
      <LayoutHeader />
      {policyInformation ? (

        activeComponent === DASHBOARD ? <Dashboard policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
          activeComponent === AMEND_POLICY_DETAILS ? <AmendmentsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
            activeComponent === VIEW_DETAILS ? <PolicyDetailsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
              activeComponent === QUOTES ? <QuotesPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
                activeComponent === DOCUMENTS ? <DocumentsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
                  activeComponent === PAYMENTS ? <PaymentsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
                    activeComponent === CLAIMS && <ClaimsPage policyData={policyInformation} setActiveComponent={setActiveComponent} />
      ) : (
        <CircularLoader />
      )}

    </div>
  );
}

export default App;
