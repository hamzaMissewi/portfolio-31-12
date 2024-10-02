import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import { SvgIconProps } from "@mui/material/SvgIcon/SvgIcon";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigatePreviousIcon from "@mui/icons-material/NavigateBefore";
import { AccountCircle, MoreHorizRounded } from "@mui/icons-material";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CheckIcon from "@mui/icons-material/Check";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import RestoreIcon from "@mui/icons-material/Restore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PreviewIcon from "@mui/icons-material/Preview";
import DownloadIcon from "@mui/icons-material/Download";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlaceIcon from "@mui/icons-material/Place";
import TvIcon from "@mui/icons-material/Tv";
import LinkIcon from "@mui/icons-material/Link";
import MemoryIcon from "@mui/icons-material/Memory";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TodayIcon from "@mui/icons-material/Today";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PersonIcon from "@mui/icons-material/Person";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MapIcon from "@mui/icons-material/Map";
import LoginIcon from "@mui/icons-material/Login";
import KeyIcon from "@mui/icons-material/Key";
import WarningIcon from "@mui/icons-material/Warning";
import SendIcon from "@mui/icons-material/Send";
import UndoIcon from "@mui/icons-material/Undo";
import SaveIcon from "@mui/icons-material/Save";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import RoomIcon from "@mui/icons-material/Room";
import RouterIcon from "@mui/icons-material/Router";
import PeopleIcon from "@mui/icons-material/People";
import PieChartIcon from "@mui/icons-material/PieChart";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import UpdateIcon from "@mui/icons-material/Update";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ErrorIcon from "@mui/icons-material/Error";
import RefreshIcon from "@mui/icons-material/Refresh";
import HardwareIcon from "@mui/icons-material/Hardware";

export enum IconType {
  LOAD_AVG = "LOAD_AVG",
  LINK = "LINK",
  BROADCASTER = "BROADCASTER",
  PLACE = "PLACE",
  FOLDER = "FOLDER",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  BINARY = "BINARY",
  NAVIGATE_NEXT = "NAVIGATE_NEXT",
  NAVIGATE_PREVIOUS = "NAVIGATE_PREVIOUS",
  DRIVE_FILE_RENAME_OUTLINE = "DRIVE_FILE_RENAME_OUTLINE",
  MORE_HORIZ = "MORE_HORIZ",
  MOVE_FOLDER = "MOVE_FOLDER",
  ARROW_DOWN = "ARROW_DOWN",
  ARROW_UP = "ARROW_UP",
  DROP_DOWN = "DROP_DOWN",
  MORE_VERT = "MORE_VERT",
  DELETE = "DELETE",
  CLOSE = "CLOSE",
  ARROW_BACK = "ARROW_BACK",
  VIEW_LIST = "VIEW_LIST",
  VIEW_MODULE = "VIEW_MODULE",
  INFO = "INFO",
  PLAY_ARROW_OUTLINED = "PLAY_ARROW_OUTLINED",
  PAUSE_OUTLINED = "PAUSE_OUTLINED",
  VOLUME_DOWN_OUTLINED = "VOLUME_DOWN_OUTLINED",
  ROTATE_RIGHT = "ROTATE_RIGHT",
  REMOVE = "REMOVE",
  ADD = "ADD",
  FULL_SCREEN = "FULL_SCREEN",
  FULL_SCREEN_EXIT = "FULL_SCREEN_EXIT",
  CLOUD_DOWNLOAD = "CLOUD_DOWNLOAD",
  OPEN_IN_NEW = "OPEN_IN_NEW",
  CHECK = "CHECK_ICON",
  MONITORING = "MONITORING_ICON",
  TRASH = "TRASH",
  CLOCK = "CLOCK",
  FILE_UPLOAD = "FILE_UPLOAD",
  PREVIEW = "PREVIEW",
  DOWNLOAD = "DOWNLOAD",
  CREATE_NEW_FOLDER = "CREATE_NEW_FOLDER",
  FILE_COPY = "FILE_COPY",
  CONTENT_CUT = "CONTENT_CUT",
  CONTENT_COPY = "CONTENT_COPY",
  CONTENT_PASTE = "CONTENT_PASTE",
  PLAY_ARROW = "PLAY_ARROW",
  PAUSE = "PAUSE",
  EXPAND_MORE = "EXPAND_MORE",
  EXPAND_LESS = "EXPAND_LESS",
  CHECK_CIRCLE = "CHECK_CIRCLE",
  CANCEL = "CANCEL",
  RESTORE = "RESTORE",
  OPEN_WITH = "OPEN_WITH",
  ARROW_RIGHT = "ARROW_RIGHT",
  MEMORY = "MEMORY",
  DELETE_FOREVER = "DELETE_FOREVER",
  COMPOSITION = "COMPOSITION",
  ARROWFORWARD = "ARROWFORWARD",
  CALENDAR = "CALENDAR",
  ADDUSER = "ADDUSER",
  ADDBROADCASTER = "ADDBROADCASTER",
  ENABLE = "ENABLE",
  DISABLE = "DISABLE",
  PROJECT = "PROJECT",
  PLAY = "PLAY",
  MAP = "MAP",
  SCENE = "SCENE",
  SAVE = "SAVE",
  DEMAND_VIDEO = "DEMAND_VIDEO",
  ROOM = "ROOM",
  KEY = "KEY",
  WARNING = "WARNING",
  SEND = "SEND",
  UNDO = "UNDO",
  LOGIN = "LOGIN",
  ROUTER = "ROUTER",
  USER = "USER",
  USERS = "USERS",
  PIESHART = "PIESHART",
  ACCOUNT = "ACCOUNT",
  VISIBILITY = "VISIBILITY",
  VISIBILITY_OFF = "VISIBILITY_OFF",
  EDIT_PEN = "EDIT_PEN",
  UPDATE = "UPDATE",
  STOCK = "STOCK",
  DEFAULT = "DEFAULT",
  ERROR = "ERROR",
  REFRESH = "REFRESH",
  HARDWARE = "HARDWARE",
  EXTERNAL_IMPORT = "EXTERNAL_IMPORT",
}

type IconProps = {
  type?: IconType;
} & SvgIconProps;

export function AppIcon({ type, ...props }: IconProps) {
  switch (type) {
    case IconType.LOAD_AVG:
      return <HourglassBottomIcon {...props} />;
    case IconType.MEMORY:
      return <MemoryIcon {...props} />;
    case IconType.LINK:
      return <LinkIcon {...props} />;
    case IconType.BROADCASTER:
      return <TvIcon {...props} />;
    case IconType.FOLDER:
      return <FolderIcon {...props} />;
    case IconType.IMAGE:
      return <ImageIcon {...props} />;
    case IconType.VIDEO:
      return <VideoFileIcon {...props} />;
    case IconType.NAVIGATE_NEXT:
      return <NavigateNextIcon {...props} />;
    case IconType.NAVIGATE_PREVIOUS:
      return <NavigatePreviousIcon {...props} />;
    case IconType.MORE_HORIZ:
      return <MoreHorizRounded {...props} />;
    case IconType.MOVE_FOLDER:
      return <DriveFileMoveIcon {...props} />;
    case IconType.ARROW_DOWN:
      return <ArrowDownwardIcon {...props} />;
    case IconType.ARROW_UP:
      return <ArrowUpwardIcon {...props} />;
    case IconType.DROP_DOWN:
      return <ArrowDropDownIcon {...props} />;
    case IconType.MORE_VERT:
      return <MoreVertIcon {...props} />;
    case IconType.DRIVE_FILE_RENAME_OUTLINE:
      return <DriveFileRenameOutlineIcon {...props} />;
    case IconType.DELETE:
      return <DeleteIcon {...props} />;
    case IconType.CLOSE:
      return <CloseIcon {...props} />;
    case IconType.ARROW_BACK:
      return <ArrowBackIcon {...props} />;
    case IconType.VIEW_LIST:
      return <ViewListIcon {...props} />;
    case IconType.VIEW_MODULE:
      return <ViewModuleIcon {...props} />;
    case IconType.INFO:
      return <InfoIcon {...props} />;
    case IconType.PLAY_ARROW_OUTLINED:
      return <PlayArrowOutlinedIcon {...props} />;
    case IconType.PAUSE_OUTLINED:
      return <PauseOutlinedIcon {...props} />;
    case IconType.VOLUME_DOWN_OUTLINED:
      return <VolumeDownOutlinedIcon {...props} />;
    case IconType.ROTATE_RIGHT:
      return <RotateRightIcon {...props} />;
    case IconType.REMOVE:
      return <RemoveIcon {...props} />;
    case IconType.ADD:
      return <AddIcon {...props} />;
    case IconType.FULL_SCREEN:
      return <FullscreenIcon {...props} />;
    case IconType.FULL_SCREEN_EXIT:
      return <FullscreenExitIcon {...props} />;
    case IconType.CLOUD_DOWNLOAD:
      return <CloudDownloadIcon {...props} />;
    case IconType.OPEN_IN_NEW:
      return <OpenInNewIcon {...props} />;
    case IconType.CHECK:
      return <CheckIcon {...props} />;
    case IconType.MONITORING:
      return <MonitorHeartIcon {...props} />;
    case IconType.TRASH:
      return <DeleteOutlineIcon {...props} />;
    case IconType.CLOCK:
      return <AccessTimeIcon {...props} />;
    case IconType.RESTORE:
      return <RestoreIcon {...props} />;
    case IconType.FILE_UPLOAD:
      return <FileUploadIcon {...props} />;
    case IconType.PREVIEW:
      return <PreviewIcon {...props} />;
    case IconType.DOWNLOAD:
      return <DownloadIcon {...props} />;
    case IconType.CREATE_NEW_FOLDER:
      return <CreateNewFolderIcon {...props} />;
    case IconType.FILE_COPY:
      return <FileCopyIcon {...props} />;
    case IconType.CONTENT_CUT:
      return <ContentCutIcon {...props} />;
    case IconType.CONTENT_COPY:
      return <ContentCopyIcon {...props} />;
    case IconType.CONTENT_PASTE:
      return <ContentPasteIcon {...props} />;
    case IconType.PLAY_ARROW:
      return <PlayArrowIcon {...props} />;
    case IconType.PAUSE:
      return <PauseIcon {...props} />;
    case IconType.EXPAND_MORE:
      return <ExpandMoreIcon {...props} />;
    case IconType.EXPAND_LESS:
      return <ExpandLessIcon {...props} />;
    case IconType.CHECK_CIRCLE:
      return <CheckCircleIcon {...props} />;
    case IconType.CANCEL:
      return <CancelIcon {...props} />;
    case IconType.OPEN_WITH:
      return <OpenWithIcon {...props} />;
    case IconType.ARROW_RIGHT:
      return <ArrowRightIcon {...props} />;
    case IconType.PLACE:
      return <PlaceIcon {...props} />;
    case IconType.DELETE_FOREVER:
      return <DeleteForeverIcon {...props} />;
    case IconType.COMPOSITION:
      return <WebAssetIcon {...props} />;
    case IconType.ARROWFORWARD:
      return <KeyboardArrowRightIcon {...props} />;
    case IconType.CALENDAR:
      return <TodayIcon {...props} />;
    case IconType.MAP:
      return <MapIcon {...props} />;
    case IconType.KEY:
      return <KeyIcon {...props} />;
    case IconType.WARNING:
      return <WarningIcon {...props} />;
    case IconType.SEND:
      return <SendIcon {...props} />;
    case IconType.UNDO:
      return <UndoIcon {...props} />;
    case IconType.LOGIN:
      return <LoginIcon {...props} />;
    case IconType.SCENE:
      return <WidgetsIcon {...props} />;
    case IconType.PLAY:
      return <PlayCircleIcon {...props} />;
    case IconType.ADDUSER:
      return <PersonAddIcon {...props} />;
    case IconType.ADDBROADCASTER:
      return <LiveTvIcon {...props} />;
    case IconType.ENABLE:
      return <PersonIcon {...props} />;
    case IconType.USER:
      return <PersonIcon {...props} />;
    case IconType.DISABLE:
      return <PersonOffIcon {...props} />;
    case IconType.PROJECT:
      return <AccountTreeIcon {...props} />;
    case IconType.SAVE:
      return <SaveIcon {...props} />;
    case IconType.DEMAND_VIDEO:
      return <OndemandVideoIcon {...props} />;
    case IconType.ROOM:
      return <RoomIcon {...props} />;
    case IconType.ROUTER:
      return <RouterIcon {...props} />;
    case IconType.USERS:
      return <PeopleIcon {...props} />;
    case IconType.ACCOUNT:
      return <AccountCircle {...props} />;
    case IconType.PIESHART:
      return <PieChartIcon {...props} />;

    case IconType.VISIBILITY:
      return <VisibilityIcon {...props} />;
    case IconType.VISIBILITY_OFF:
      return <VisibilityOffIcon {...props} />;
    case IconType.EDIT_PEN:
      return <DriveFileRenameOutlineTwoToneIcon {...props} />;
    case IconType.UPDATE:
      return <UpdateIcon {...props} />;
    case IconType.STOCK:
      return <Inventory2Icon {...props} />;
    case IconType.DEFAULT:
      return <CheckBoxIcon {...props} />;
    case IconType.ERROR:
      return <ErrorIcon {...props} />;
    case IconType.REFRESH:
      return <RefreshIcon {...props} />;
    case IconType.HARDWARE:
      return <HardwareIcon {...props} />;
    case IconType.EXTERNAL_IMPORT:
      return <CloudDownloadIcon {...props} />;
    default:
      return null;
  }
}
