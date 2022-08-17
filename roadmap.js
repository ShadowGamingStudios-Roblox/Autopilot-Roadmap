const COMPLETED = 'completed';
const DEPLOYED = 'deployed';
const IN_PROGRESS = 'in-progress';
const NEXT = 'next';
const DELAYED = 'delayed';

const STATUS_NAMES = {
  [COMPLETED]: 'Completed',
  [DEPLOYED]: 'Live',
  [IN_PROGRESS]: 'In progress',
  [NEXT]: 'Next Update',
  [DELAYED]: 'Delayed'
};

const PRE_RELEASE = [
  {
    title: 'Permissions',
    description: 'A role that can let other people, besides members with administration permission, update the scores.',
    status: DEPLOYED
  },
  {
    title: 'Help Command',
    description: 'A command that helps you configure the bot.',
    status: DEPLOYED
  },
  {
    title: 'Settings',
    description: 'Gives you options to configure the tables.',
    status: DEPLOYED
  },
  {
    title: 'Formats',
    description: 'Lets you change the table into different formats besides the default format.',
    status: DEPLOYED
  },
  {
    title: 'Specific Commands',
    description: 'Shows you specific players or players that has that specific role.',
    status: DEPLOYED
  },
  {
    title: 'Change Prefix',
    description: 'Lets you change the bot prefix.',
    status: DEPLOYED
  },
  {
    title: 'Bot Icon',
    description: 'Updated the bot icon.',
    status: DEPLOYED
  }
];

const LONG_TERM = [
  {
    title: 'Arrow Emojis',
    description: 'Arrow emojis that let you flip pages without running another command.',
    status: NEXT
  },
  {
    title: 'Live Update',
    description: 'The chart will be updated live.',
    status: NEXT
  },
  {
    title: 'Headers',
    description: 'Lets you change the headers.',
    status: NEXT
  },
  {
    title: 'Default Points',
    description: 'Lets you set the default point whenever a new member is added.',
    status: NEXT
  },
  {
    title: 'Rename Scoreboards',
    description: 'Lets you rename a current scoreboard.',
    status: NEXT
  },
  {
    title: 'Columns',
    description: 'Lets you have columns on tables.',
  },
  {
    title: 'Mathematical Features',
    description: 'Lets you add, subtract, multiply, or divide points.',
  },
  {
    title: 'Total Scores',
    description: 'Shows you the total points of the table.',
  },
  {
    title: 'Audits',
    description: 'Shows you the changes on the board.',
  },
  {
    title: 'Shorten Commands',
    description: 'Lets you type in shorter commands instead of typing the whole command.',
  },
  {
    title: 'Auto Completion',
    description: 'Members will be marked as completed when they reach a certain point.',
  },
  {
    title: 'Admin/Scorekeeper Options',
    description: 'Lets you turn off the Admin permission or Scorekeeper role requirement.',
  },
  {
    title: 'Table Filtering',
    description: 'Lets you change the way the table is sorted, by either letting the points be sorted from least to greaters, greatest to least, A-Z, etc.',
  },
  {
    title: 'Confirmations',
    description: 'Sends confirmation to a certain channel set via settings.',
  },
  {
    title: 'Mass Logging',
    description: 'Lets you give points to multiple members instead of one by one.',
  },
  {
    title: 'Role Giver',
    description: 'Gives members a role whenever they reach a certain amount of points.',
  }
];

const template = document.getElementById('item-template');

const addItemsToGroups = function(group, items) {
  items.forEach(item => {
    const element = template.cloneNode(true);
    if (item.status) {
      element.className = `roadmap-item ${item.status}`;
      element.firstElementChild.lastElementChild.innerHTML = STATUS_NAMES[item.status];
      element.firstElementChild.lastElementChild.className = `item-status sans-font color-${item.status}`;
    }
    element.firstElementChild.firstElementChild.innerHTML = item.title;
    element.lastElementChild.innerHTML = item.description;
    element.id = '';
    group.appendChild(element);
  });
}

//addItemsToGroups(document.getElementById('completed-items'), COMPLETED, true);
addItemsToGroups(document.getElementById('pre-release-items'), PRE_RELEASE, false);
addItemsToGroups(document.getElementById('long-term-items'), LONG_TERM, false);
