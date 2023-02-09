import {useState} from 'react';

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = name => {
    setState(state => ({ ...state, [name]: state[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = Object.keys(state);

  return (
    <>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() ? (
          <Statistics
            state={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message='There is no feedback :(' />
        )}
      </Section>
    </>
  );
};



