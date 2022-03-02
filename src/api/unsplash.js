import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID HaZxfB_R8LFbJP8d9KbkDjaJ3qdUYgEvgkRk7jFYBh4'
  }
});