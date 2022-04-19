import React, {FC} from 'react';
import { ReactComponent as Task } from '../../icons/buy.svg';
import { ReactComponent as Idea } from '../../icons/lamp.svg';
import { ReactComponent as RandomThought } from '../../icons/mind.svg';
console.log(Task)

interface Props {
  category: string;
  width: string;
  height: string;
  fill?: string;
  IconRender: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

interface Icons {
  category: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined;
}

const icons:Icons[] = [
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

export interface CustomItemProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Icon:FC<Props> = ({ category, width, height, fill }) => {
  const IconRender = icons.find(option => option.category === category)?.icon
  console.log(IconRender)
    return (
        <IconRender width={width} height={height} fill={fill}/>
    )
}

export default Icon;
