import client from '../../client';

const getAll = params => {
  return client.get(`api/v1/<%= name %>`, {
    params
  });
};

export { getAll }
