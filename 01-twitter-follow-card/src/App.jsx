import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'Jesus-Almansa',
    name: 'Jesus Almansa',
    isFollowing: true
  },
  {
    userName: 'rauulpastor',
    name: 'Raul Pastor',
    isFollowing: false
  },
  {
    userName: 'NicolasVollmer',
    name: 'Nicolas Vollmer',
    isFollowing: true
  }
];

export function App () {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard 
            key={userName}
            userName={userName} 
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
