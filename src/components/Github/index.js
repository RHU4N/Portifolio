import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './styles';

const API_URL = 'https://api.github.com/users/RHU4N/repos';

const GitHub = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(response => {
      setRepositories(response.data);
    });
  }, []);

  return (
    <C.Container>
      <C.ScrollView>
        <C.Grid> 
          {repositories.map(repository => (
            <C.Card key={repository.id}>
              <C.Título>{repository.name}</C.Título>
              <C.desc>{repository.description}</C.desc>
              <C.link href={repository.html_url}>Ver no GitHub</C.link>
            </C.Card>
          ))} 
        </C.Grid>
      </C.ScrollView>
    </C.Container>
  );
};

export default GitHub;

