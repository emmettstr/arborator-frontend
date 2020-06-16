export default {
  failed: 'Action failed',
  success: 'Action successful',
  oops: 'Something went wrong: ',
  error403: 'Hey you! You do not have the permissions for this action. Please contact the administrator.',
  error401: 'Hey you! Please log in to do any further actions of that type.',
  error404page: "Doh! There's nothing here...",
  welcomeback: 'Welcome back to Arborator!',
  loginbtn: 'Log in',
  loginselector: 'Connect via',
  settings: 'Settings',
  admin: 'Admin',
  fullscreen: 'Fullscreen',
  footer: ['Made with', 'in', 'at'], // reaaallllll basic one, not good enough but still buggy using span and html parse
  navhome: 'Home',
  navprojects: 'Projects',
  navsettings: 'Settings',

  // first page (the index)
  homepage: {
    accessTreebankBtn: 'Access Treebanks',
    slogan: 'Treebank Annotation for Human Beings',
    descriptionCard: {
      title: 'A collaborative annotation tool for treebank development',
      subtitle: "With an easy-to-use graphic interface, this isn't your daddy's annotation tool.",
      content: [
        'Just drag a word onto the other to make a dependency relation. Change its features in a single click. Just select words to make them tokens. The dependency set, tagset, and feature set are fully configurable. We provide ready-made configurations for',
        'and'
      ],
      tooltipSud: 'SUD: The surface-syntactic, distribution-based version of Universal Dependencies',
      tooltipUd: 'Universal Dependencies: The one-of-a-kind collaborative treebank annotation project offering 150 treebanks in 90 languages'
    },
    grewCard: {
      title: 'Search with a powerful graph grammar',
      subtitle: 'Modify the search results directly in the Web interface',
      content: [
        "A good treebank all about proper maintenance; it's about finding problems and correcting them coherently. With Arborator-Grew, gone are the days of constant back-and-forth between different websites or manual tinkering with CoNLL files. Just learn the",
        "syntax and you're ready to go. And with all the examples and tutorials provided, that's a breeze too."
      ],
      tooltipGrew: 'The grew graph grammar'
    },
    collaborativeCard: {
      title: 'Build beautiful treebanks collaboratively',
      subtitle: 'Social login makes Arborator-Grew a hassle-free tool',
      content: [
        'You control who accesses your annotation project, and no annotator can destroy anyone else\'s trees.',
        'Push the CoNLL data onto your GitHub project and share your beautiful trees from there.',
        'Try it all out on our'
      ],
      playgroundBtn: 'Playground'
    },
    sourceCard: {
      title: 'Access to this web page and its source code is completely free',
      subtitle: 'open to all and free of charge',
      content: [
        'Head over to', 
        'to take a look at the code.', 
        'Want to get involved? Send your feedback on the', 
        'issue page of this Arborator front-end', 
        'A guide to install Arborator-Grew on your own server is coming soon...'
      ],
      tooltipGit: 'our GitHub page'
    },
    storyCard: {
      title: 'Our story',
      subtitle: 'Arborator-Grew combines the features of two preexisting tools: Arborator and Grew.',
      content: [
        "Arborator is a widely used collaborative graphical online dependency treebank annotation tool. Grew is a tool for graph querying and rewriting which specializes in structures needed in NLP, i.e. syntactic and semantic dependency trees and graphs. Grew also has an online version,", 
        ", where all Universal Dependencies treebanks in their classical, deep and surface-syntactic flavors can be queried. Arborator-Grew is a complete overhaul of Arborator, replacing its own internal database storage with a new Grew API, which adds a powerful query tool to Arborator's existing treebank creation and correction features. This includes complex access control for parallel expert and crowd-sourced annotation, tree comparison visualization, and various exercise modes for teaching and training annotators. Arborator-Grew opens up new pathways for collectively creating, updating, maintaining, and curating syntactic treebanks and semantic graph banks."
      ]
    },
    citeCard: {
      title: 'Cite us if you use this',
      subtitle: 'And good things will happen.'
    },
    toolsCard: {
      title: 'Some other tools',
      subtitle: 'Make sure you have the right tool for the right job.',
      content: [
        'If you want to inspect a CoNLL file quickly, check this out:',
        'No login!',
        'Fast CoNLL file viewer',
        'For quick graphical modification of a CoNLL file:',
        'CoNLL file graphical editor',
        'The legacy Arborator is still running here.'
      ]
    }
  },

  // list of projects page
  projectHub: {
    tooltipCreaProject: 'Create a new project',
    tooltipChangeView: 'Change view',
    title: 'Projects',
    samples: 'samples',
    rightClickSettings: 'Settings',
    rightClickDelete: 'Delete'
  },

  // page when you enter a project ( samples info, etc)
  projectView: {
    tooltipSettings: 'Modify project settings',
    tooltipViewAdmin: 'View administrator information',
    nodata: [
      'Oops! No data to display...',
      'No sample yet. This project is empty, please upload some CoNLL files.',
      'Ask an administrator to add files'
    ],
    tooltipAddSample: 'Add CoNLL files as new samples',
    tooltipExportSample: [
      'Select the samples you want to export',
      'Export selected samples'
    ],
    tooltipDeleteSample: [
      'Select the samples you want to delete',
      'Delete selected samples'
    ],
    tooltipGitPush: [
      'Push only my trees of the selected samples',
      'Push my trees of the selected samples, filled up with the most recent trees',
      'Push the most recent trees',
      'Push all trees of the selected samples',
      'Select the samples you want to commit and push to GitHub',
      'Commit and push the selected samples to GitHub'
    ],
    gitPullUser: 'Replace my trees from the selected samples with the ones from GitHub',
    gitPullAll: 'Replace all trees from the selected samples with the ones from GitHub',
    tooltipGitPullSelect: [
      'Select the samples you want to update from your GitHub folder',
      'Pull data from your GitHub folder onto the selected samples'
    ],
    tooltipSearch: 'Search a sample',
    tooltipSelectVisible: 'Select visible columns',
    tooltipFullscreen: 'Fullscreen table',
    tooltipFabGrew: 'Search with Grew in the whole project',
    tooltipFabGrewUser: 'View only my trees',
    tooltipFabGrewUserRecent: 'View my trees, filled up with the most recent trees',
    tooltipFabGrewRecent: 'View most recent trees',
    tooltipFabGrewAll: 'View all trees',
    tooltipRelationTable: 'Get Relation Tables',
    tooltipWindows: ['Minimize', 'Maximize', 'Close'],
    uploadSelectDial: 'Select one or multiple conll files',
    projectInfoDial: {
      title: 'Project Information',
      ifAdmin: 'Contact these project administrators if you need access or further information:',
      else: 'Contact the project administrator if you need access or further information:'
    }
  },

  // window which displays project settings
  projectSettings: {
    title: 'Settings',
    windowClose: 'Close',
    descriptionSave: 'save description',
    togglePrivate: 'Visibility',
    togglePrivateCaption: 'Private projects restrain access and annotation, Visible projects restrain only annotation and Open projects allow anyone to view and contribute their annotation' ,
    toggleAllVisible: 'All trees visible',
    toggleAllVisibleCaption: "If true, annotators will be able to see others' trees",
    toggleOpenProject: 'Open project',
    toggleOpenProjectCaption: 'If true, anyone can edit samples',
    defaultUserTreePanel: 'Default User Tree',
    adminsPanel: 'Admins',
    guestsPanel: 'Guests',
    shownFeaturesPanel: 'Shown Features', 
    shownFeaturesTokens: 'Choose the features to be shown under each token',
    shownFeaturesSentences: 'Choose the features to be shown under each sentence',
    annotationSettingsInput: 'Annotation settings',
    annotationSettingsSave: 'save annotation settings',
    checkAnnotation: 'This looks like reasonable Json'
  }

}
