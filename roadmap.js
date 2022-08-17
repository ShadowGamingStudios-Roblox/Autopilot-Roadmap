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
    title: 'Basic Autopilot',
    description: 'Adaptive Cruise Control and AutoSteer lets the car manage the speed and keeps itself inside the lane, respectively.',
    status: DEPLOYED
  },
  {
    title: 'Collision Avoidance',
    description: 'The car will automatically steer or brake away from a possible collision.',
    status: DEPLOYED
  },
  {
    title: 'Model S',
    description: 'Model S has been added.',
    status: DEPLOYED
  },
  {
    title: 'Model X',
    description: 'Model X has been added.',
    status: DEPLOYED
  },
  {
    title: 'Model 3',
    description: 'Model 3 has been added.',
    status: DEPLOYED
  },
  {
    title: 'Cybertruck',
    description: 'Cybertruck has been added.',
    status: DEPLOYED
  }
];

const LONG_TERM = [
  {
    title: 'Adjustable Speed',
    description: 'Will let drivers control the speed of which the car travels at.',
    status: IN_PROGRESS
  },
  {
    title: 'Roadster',
    description: 'Roadster is in progress.',
    status: IN_PROGRESS
  },
  {
    title: 'Model Y',
    description: 'Model Y has been delayed.',
    status: DELAYED
  },
  {
    title: 'Auto Lane Change',
    description: 'Lets the car automatically change lanes at a push of a button.',
    status: DELAYED
  },
  {
    title: 'City Map',
    description: 'Will be adding a city for players to explore.',
  },
  {
    title: 'Road GUI',
    description: 'The car will automatically visualize the road and show it on a UI.',
  },
  {
    title: 'Active Steering Wheel',
    description: 'The Steering Wheel will move based upon the wheels trajectory.',
  },
  {
    title: 'Authentic Models',
    description: 'All models will be refreshed in the near future.',
  },
  {
    title: 'Semi Truck',
    description: 'Semi Truck is being planned.',
  },
  {
    title: 'Navigation System',
    description: 'Will let user punch in an address, and the GPS will automatically plot the fastest route.',
  },
  {
    title: 'Navigate on Autopilot',
    description: 'Lets the car follow the navigation route on Autopilot.',
  },
  {
    title: 'Autopark',
    description: 'Lets the car park on its own when it detects a possible parking spot.',
  },
  {
    title: 'Smart Summon',
    description: 'Automatically call your car from its parking spot.',
  },
  {
    title: 'Full Self-Driving',
    description: 'Will let the car drive on city streets and complicated roads. Additionaly, it will be able to stop at traffic signs and traffic lights.',
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
