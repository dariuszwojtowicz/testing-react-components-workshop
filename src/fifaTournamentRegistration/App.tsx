import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {submitForm} from './Api';

const MultiPageForm = React.createContext({});

const MultiPageFormProvider = ({ initialValues = {}, ...props }) => {
  const [initState] = React.useState(initialValues);
  const [form, setFormValues] = React.useReducer(
    (state: any, action: any) => ({ ...state, ...action }),
    initState,
  );
  return (
    <MultiPageForm.Provider
      value={{ form, setFormValues }}
      {...props}
    />
  );
};

const useMultiPageForm = (): any => {
  const context = React.useContext(MultiPageForm);
  return context;
};

const Main = () => (
  <>
    <h1>Welcome on FIFA 21 tournament page</h1>
    Do you want to play? <Link to="/personal-data">Register here</Link>
  </>
);

const PersonalData = ({ history }: any) => {
  const { form, setFormValues } = useMultiPageForm();
  return (
    <>
      <h2>Personal Data</h2>
      <form
        autoComplete="off"
        onSubmit={(e: any) => {
          e.preventDefault();
          history.push('/other-data');
        }}
      >
        <label htmlFor="name">Your name</label>
        <input
          autoComplete="off"
          id="name"
          value={form.name}
          onChange={(e) => setFormValues({ name: e.target.value })}
        />
      </form>
      <Link to="/">Go Home</Link> | <Link to="/other-data">Next</Link>
    </>
  );
};

const OtherData = ({ history }: any) => {
  const { form, setFormValues } = useMultiPageForm();
  return (
    <>
      <h2>Other Data</h2>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          history.push('/confirm');
        }}
      >
        <label htmlFor="team">Your team</label>
        <input
          autoComplete="off"
          id="team"
          value={form.team}
          onChange={(e) => setFormValues({ team: e.target.value })}
        />
      </form>
      <Link to="/personal-data">Go Back</Link> | <Link to="/confirm">Review provided information</Link>
    </>
  );
};

const Confirm = ({ history }: any) => {
  const { form } = useMultiPageForm();
  function handleConfirmClick() {
    submitForm(form).then(
      () => {
        history.push('/success');
      }
    );
  }
  return (
    <>
      <h2>Confirm</h2>
      <div>
        <strong id="name-label">Your name</strong>:{' '}
        <span aria-labelledby="name-label">{form.name}</span>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <strong id="team-label">Favorite team</strong>:{' '}
        <span aria-labelledby="team-label">{form.team}</span>
      </div>
      <Link to="/other-data">Go Back</Link> |{' '}
      <button type="submit" onClick={handleConfirmClick}>Confirm</button>
    </>
  );
};

const Success = () => (
  <>
    <h2>You did it. Good luck on tournament!</h2>
    <div>
      <Link to="/">Go home</Link>
    </div>
  </>
);

const App = () => (
  <MultiPageFormProvider initialValues={{ name: '', team: '' }}>
    <Router>
      <Switch>
        <Route path="/personal-data" component={PersonalData} />
        <Route path="/other-data" component={OtherData} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/success" component={Success} />
        <Route component={Main} />
      </Switch>
    </Router>
  </MultiPageFormProvider>
);

export default App;
