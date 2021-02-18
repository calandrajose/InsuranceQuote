import React, {useState} from "react";
import styled from "@emotion/styled";

import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [dataResume, setDataResume] = useState({
    cost: 0,
    data: {
      brand: '',
      year: '',
      contractType: ''
    }
  })

  const [loading, setLoading] = useState(false)
  const {data, cost} = dataResume;

  return (
    <Container>
      <Header title="Cotizador de seguros" />
      <FormContainer>
          <Form 
            setDataResume={setDataResume}
            setLoading={setLoading}
            />
          {loading ? <Spinner/> : null}
          
          {!loading ? (
            <div>
              <Resume data={data}/>
              <Result cost={parseFloat(cost)}/> 
            </div>
          )
            : null}
      </FormContainer>
    </Container>
  );
}

export default App;
