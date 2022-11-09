import * as React from 'react';
import './style.css';
import { createBot } from 'botui';
import {
  useBotUI,
  useBotUIAction,
  useBotUIMessage,
  BotUI,
  BotUIAction,
  BotUIMessageList,
} from '@botui/react';
const myBot = createBot();
import '@botui/react/dist/styles/default.theme.scss';
export default function App() {
  React.useEffect(() => {
    myBot
      .wait({ waitTime: 1000 })
      .then(() => myBot.message.add({ text: 'hello, what is your name?' }))
      .then(() =>
        myBot.action.set(
          {
            options: [
              { label: 'John', value: 'john' },
              { label: 'Jane', value: 'jane' },
            ],
          },
          { actionType: 'select' }
        )
      )
      .then((data) =>
        myBot.message.add({ text: `nice to meet you ${data.selected.label}` })
      );
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BotUI bot={myBot}>
        <BotUIMessageList />
        <BotUIAction />
      </BotUI>
    </div>
  );
}
