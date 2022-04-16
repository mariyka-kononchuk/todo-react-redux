import React from 'react';
import { Button } from './Icon';
import { ReactComponent as Task } from '../../icons/buy.svg';
import { ReactComponent as Idea } from '../../icons/lamp.svg';
import { ReactComponent as RandomThought } from '../../icons/mind.svg';

const icons = [
  {
    category: 'Task',
    icon: Task
  },
  {
    category: 'Idea',
    icon: Idea
  },
  {
    category: 'Random Thought',
    icon: RandomThought
  }
];

const Icon = ({ category, width, height, fill }) => {
    console.log('item', category)
    const IconRender = icons.find(option => option.category === category).icon
    return (
        <IconRender width={width} height={height} fill={ fill }/>
    )
}

export default Icon
