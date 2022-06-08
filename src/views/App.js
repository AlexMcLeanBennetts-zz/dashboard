import 'assets/styles/output.css';
import { useState, useEffect } from 'react';
import { fetchData } from 'utils/services/fetchData.js';
import { DASHBOARD, AMEND_POLICY_DETAILS, VIEW_DETAILS, DOCUMENTS, PAYMENTS, CLAIMS, MULTICAR_QUOTE, REFERAL, QUOTES } from 'utils/constants/ActiveComponents.js';
import LayoutHeader from 'components/layout/Header.js';
import Dashboard from 'views/dashboard/Dashboard.js';
import CircularLoader from 'components/circularLoader/CircularLoader.js';
import AmendmentsPage from 'views/amendments/Amendments.js';
import PolicyDetailsPage from 'views/policyDetails/PolicyDetails.js';
import QuotesPage from 'views/quotes/QuotesPage.js';
import DocumentsPage from 'views/documents/DocumentsPage.js';
import PaymentsPage from 'views/payments/PaymentsPage.js';
import ClaimsPage from 'views/claims/ClaimsPage.js';


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
      <LayoutHeader setActiveComponent={setActiveComponent} />
      {policyInformation ? (
        <main className="container mx-auto w-1/2">
          {activeComponent === DASHBOARD ? <Dashboard policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
            activeComponent === AMEND_POLICY_DETAILS ? <AmendmentsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
              activeComponent === VIEW_DETAILS ? <PolicyDetailsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
                activeComponent === QUOTES ? <QuotesPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
                  activeComponent === DOCUMENTS ? <DocumentsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
                    activeComponent === PAYMENTS ? <PaymentsPage policyData={policyInformation} setActiveComponent={setActiveComponent} /> :
                      activeComponent === CLAIMS && <ClaimsPage policyData={policyInformation} setActiveComponent={setActiveComponent} />}
        </main>
      ) : (
        <CircularLoader />
      )}

    </div>
  );
}

export default App;
