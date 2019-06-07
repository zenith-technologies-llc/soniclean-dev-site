import React from 'react';
import DefaultLayout from '../containers/DefaultLayout';

// import CodeEditors from '../views/Editors/CodeEditors'
const CodeEditors = React.lazy(() => import('../views/Editors/CodeEditors'));
const TextEditors = React.lazy(() => import('../views/Editors/TextEditors'));

const Compose = React.lazy(() => import('../views/Apps/Email/Compose'));
const Inbox = React.lazy(() => import('../views/Apps/Email/Inbox'));
const Message = React.lazy(() => import('../views/Apps/Email/Message'));
const Invoice = React.lazy(() => import('../views/Apps/Invoicing/Invoice'));

const AdvancedForms = React.lazy(() => import('../views/Forms/AdvancedForms'));
const BasicForms = React.lazy(() => import('../views/Forms/BasicForms'));
const ValidationForms = React.lazy(() => import('../views/Forms/ValidationForms'));
const GoogleMaps = React.lazy(() => import('../views/GoogleMaps'));
const Toastr = React.lazy(() => import('../views/Notifications/Toastr'));
const Calendar = React.lazy(() => import('../views/Plugins/Calendar'));
const Draggable = React.lazy(() => import('../views/Plugins/Draggable'));
const Spinners = React.lazy(() => import('../views/Plugins/Spinners'));
const DataTable = React.lazy(() => import('../views/Tables/DataTable'));
const Tables = React.lazy(() => import('../views/Tables/Tables'));
const LoadingButtons = React.lazy(() => import('../views/Buttons/LoadingButtons'));

const Breadcrumbs = React.lazy(() => import('../views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('../views/Base/Cards'));
const Carousels = React.lazy(() => import('../views/Base/Carousels'));
const Collapses = React.lazy(() => import('../views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('../views/Base/Dropdowns'));

const Jumbotrons = React.lazy(() => import('../views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('../views/Base/ListGroups'));
const Navbars = React.lazy(() => import('../views/Base/Navbars'));
const Navs = React.lazy(() => import('../views/Base/Navs'));
const Paginations = React.lazy(() => import('../views/Base/Paginations'));
const Popovers = React.lazy(() => import('../views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('../views/Base/ProgressBar'));
const Switches = React.lazy(() => import('../views/Base/Switches'));

const Tabs = React.lazy(() => import('../views/Base/Tabs'));
const Tooltips = React.lazy(() => import('../views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('../views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('../views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('../views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('../views/Buttons/Buttons'));
const Charts = React.lazy(() => import('../views/Charts'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('../views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('../views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('../views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('../views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('../views/Notifications/Alerts'));
const Badges = React.lazy(() => import('../views/Notifications/Badges'));
const Modals = React.lazy(() => import('../views/Notifications/Modals'));
const Colors = React.lazy(() => import('../views/Theme/Colors'));
const Typography = React.lazy(() => import('../views/Theme/Typography'));
const Widgets = React.lazy(() => import('../views/Widgets/Widgets'));
const Users = React.lazy(() => import('../views/Users/Users'));
const User = React.lazy(() => import('../views/Users/User'));

const SalesForm = React.lazy(() => import('../views/SalesForm'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: "/",
    name: "Soniclean",
    component: DefaultLayout,
    exact: true,
    private: true
  },
  {
    path: "/sales",
    name: "Sales",
    component: SalesForm,
    private: true
  },
  {
    path: "/theme",
    name: "Theme",
    component: Colors,
    exact: true,
    private: true
  },
  { path: "/theme/colors", name: "Colors", component: Colors, private: true },
  {
    path: "/theme/typography",
    name: "Typography",
    component: Typography,
    private: true
  },
  { path: "/base", name: "Base", component: Cards, exact: true, private: true },
  {
    path: "/base/breadcrumbs",
    name: "Breadcrumbs",
    component: Breadcrumbs,
    private: true
  },
  { path: "/base/cards", name: "Cards", component: Cards, private: true },
  {
    path: "/base/carousels",
    name: "Carousel",
    component: Carousels,
    private: true
  },
  {
    path: "/base/collapses",
    name: "Collapse",
    component: Collapses,
    private: true
  },
  {
    path: "/base/dropdowns",
    name: "Dropdowns",
    component: Dropdowns,
    private: true
  },
  {
    path: "/base/jumbotrons",
    name: "Jumbotrons",
    component: Jumbotrons,
    private: true
  },
  {
    path: "/base/list-groups",
    name: "List Groups",
    component: ListGroups,
    private: true
  },
  { path: "/base/navbars", name: "Navbars", component: Navbars, private: true },
  { path: "/base/navs", name: "Navs", component: Navs, private: true },
  {
    path: "/base/paginations",
    name: "Paginations",
    component: Paginations,
    private: true
  },
  {
    path: "/base/popovers",
    name: "Popovers",
    component: Popovers,
    private: true
  },
  {
    path: "/base/progress-bar",
    name: "Progress Bar",
    component: ProgressBar,
    private: true
  },
  {
    path: "/base/switches",
    name: "Switches",
    component: Switches,
    private: true
  },
  { path: "/base/tabs", name: "Tabs", component: Tabs, private: true },
  {
    path: "/base/tooltips",
    name: "Tooltips",
    component: Tooltips,
    private: true
  },
  {
    path: "/profile",
    name: "Profile",
    component: Buttons,
    exact: true,
    private: true
  },
  {
    path: "/buttons/buttons",
    name: "Buttons",
    component: Buttons,
    private: true
  },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
    private: true
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
    private: true
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
    private: true
  },
  {
    path: "/buttons/loading-buttons",
    name: "Loading Buttons",
    component: LoadingButtons,
    private: true
  },
  { path: "/charts", name: "Charts", component: Charts },
  {
    path: "/editors",
    name: "Editors",
    component: CodeEditors,
    exact: true,
    private: true
  },
  {
    path: "/editors/code-editors",
    name: "Code Editors",
    component: CodeEditors,
    private: true
  },
  {
    path: "/editors/text-editors",
    name: "Text Editors",
    component: TextEditors,
    private: true
  },
  {
    path: "/forms",
    name: "Forms",
    component: BasicForms,
    exact: true,
    private: true
  },
  {
    path: "/forms/advanced-forms",
    name: "Advanced Forms",
    component: AdvancedForms,
    private: true
  },
  {
    path: "/forms/basic-forms",
    name: "Basic Forms",
    component: BasicForms,
    private: true
  },
  {
    path: "/forms/validation-forms",
    name: "Form Validation",
    component: ValidationForms,
    private: true
  },
  {
    path: "/google-maps",
    name: "Google Maps",
    component: GoogleMaps,
    private: true
  },
  {
    path: "/icons",
    exact: true,
    name: "Icons",
    component: CoreUIIcons,
    private: true
  },
  {
    path: "/icons/coreui-icons",
    name: "CoreUI Icons",
    component: CoreUIIcons,
    private: true
  },
  { path: "/icons/flags", name: "Flags", component: Flags, private: true },
  {
    path: "/icons/font-awesome",
    name: "Font Awesome",
    component: FontAwesome,
    private: true
  },
  {
    path: "/icons/simple-line-icons",
    name: "Simple Line Icons",
    component: SimpleLineIcons,
    private: true
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
    private: true
  },
  {
    path: "/notifications/alerts",
    name: "Alerts",
    component: Alerts,
    private: true
  },
  {
    path: "/notifications/badges",
    name: "Badges",
    component: Badges,
    private: true
  },
  {
    path: "/notifications/modals",
    name: "Modals",
    component: Modals,
    private: true
  },
  {
    path: "/notifications/toastr",
    name: "Toastr",
    component: Toastr,
    private: true
  },
  {
    path: "/plugins",
    name: "Plugins",
    component: Calendar,
    exact: true,
    private: true
  },
  {
    path: "/plugins/calendar",
    name: "Calendar",
    component: Calendar,
    private: true
  },
  {
    path: "/plugins/draggable",
    name: "Draggable Cards",
    component: Draggable,
    private: true
  },
  {
    path: "/plugins/spinners",
    name: "Spinners",
    component: Spinners,
    private: true
  },
  {
    path: "/settings",
    name: "Settings",
    component: Tables,
    exact: true,
    private: true
  },
  {
    path: "/tables/data-table",
    name: "Data Table",
    component: DataTable,
    private: true
  },
  { path: "/tables/tables", name: "Tables", component: Tables, private: true },
  { path: "/widgets", name: "Widgets", component: Widgets, private: true },
  {
    path: "/contact",
    name: "Contact",
    component: Compose,
    exact: true,
    private: true
  },
  {
    path: "/apps/email",
    name: "Email",
    component: Compose,
    exact: true,
    private: true
  },
  {
    path: "/apps/email/compose",
    name: "Compose",
    component: Compose,
    private: true
  },
  { path: "/apps/email/inbox", name: "Inbox", component: Inbox, private: true },
  {
    path: "/apps/email/message",
    name: "Message",
    component: Message,
    private: true
  },
  {
    path: "/apps/invoicing",
    name: "Invoice",
    component: Invoice,
    exact: true,
    private: true
  },
  {
    path: "/apps/invoicing/invoice",
    name: "Invoice",
    component: Invoice,
    private: true
  },
  {
    path: "/users",
    exact: true,
    name: "Users",
    component: Users,
    private: true
  },
  {
    path: "/users/:id",
    exact: true,
    name: "User Details",
    component: User,
    private: true
  },

];

export default routes;
