import {FC, memo, PropsWithChildren} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const skillNames = skills.map(skill => skill.name).join(', ');
  
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-lg font-bold text-gray-800">{name}:</span>
      <span className="text-sm text-gray-600">{skillNames}</span>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';
