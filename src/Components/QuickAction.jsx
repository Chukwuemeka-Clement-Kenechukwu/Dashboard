import { Video, Calendar, FileText, ClipboardPlus } from "lucide-react";

export const QuickActions = ({ theme }) => {
  return (
    <div className={`quick-actions ${theme}`}>
      <h3>Quick actions</h3>

      <div className="actionGrid">
        <button className="activeBtn">
          <Video size={22} />
          <span>Start video call</span>
        </button>

        <button>
          <Calendar size={22} />
          <span>New appointment</span>
        </button>

        <button>
          <ClipboardPlus size={22} />
          <span>Write prescription</span>
        </button>

        <button>
          <FileText size={22} />
          <span>New record</span>
        </button>
      </div>
    </div>
  );
};
