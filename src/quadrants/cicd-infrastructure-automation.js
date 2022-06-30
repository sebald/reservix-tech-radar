import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 3;

export const name = 'CI/CD, Infrastructure & Automation';

export const entries = [
  {
    label: 'Docker',
    link: 'https://www.docker.com/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'GitLab CI',
    link: 'https://docs.gitlab.com/ee/ci/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'GitHub Actions',
    link: 'https://github.com/features/actions',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Kibana',
    link: 'https://www.elastic.co/kibana/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Terraform',
    link: 'https://www.terraform.io/',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'SonarQube',
    link: 'https://www.sonarqube.org/',
    quadrant,
    ring: assess,
    active: true,
    moved: 0,
  },
  {
    label: 'Chromatic',
    link: 'https://www.chromatic.com/',
    quadrant,
    ring: assess,
    active: true,
    moved: 0,
  },
];