import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Table, Button } from "antd";
import { Image } from "react-bootstrap";
import { EllipsisOutlined, RightOutlined } from "@ant-design/icons";
import Steps from "../../../../assets/images/steps.png";
import MoodDiary from "../../../../assets/images/MoodDiary.png";
import Workout from "../../../../assets/images/workout.png";
import Water from "../../../../assets/images/water.png";
import Cycling from "../../../../assets/images/cycling.png";
import Habits from "../../../../assets/images/Habits.png";
import Arrow from "../../../../assets/images/healtharticle/arrow.png";
import ChallengeModal from "./ChallengeModal";
import UpdateModal from "./UpdateModal";
import ActivityModal from "./ActivityModal";
import { CareStyled } from "./CareStyled.Styled";
import { ReactComponent as Calories } from "../../../../assets/icons/calories.svg";
import { ReactComponent as Heart } from "../../../../assets/icons/heart.svg";
import { ReactComponent as Waterglass } from "../../../../assets/icons/watergalass.svg";
import { ReactComponent as Purpledot } from "../../../../assets/icons/purpled.svg";
import { ReactComponent as Orangedot } from "../../../../assets/icons/oranged.svg";
import { ReactComponent as Plusicon } from "../../../../assets/icons/plusicon.svg";
import SetGoal from "./SetGoal";
import { useDispatch } from "react-redux";
import { getallUserActivityAPI } from "../../../../redux/slices/generic/genericService";
import { useHistory } from "react-router-dom";

const data = [
  { name: "Week 1", progress: 1, goals: 2 },
  { name: "Week 2", progress: 2, goals: 2.5 },
  { name: "Week 3", progress: 3, goals: 3.5 },
  { name: "Week 4", progress: 4, goals: 4 },
];

const challengeData = [
  {
    key: "1",
    slNo: "01",
    challengeName: "Cycling 10km /Daily",
    startDate: "20-08-24",
    endDate: "20-08-24",
    status: "Accepted",
    challengers: "Abhay, Bindru, Ajmal, Akhil, Arun, +3",
  },
  {
    key: "2",
    slNo: "02",
    challengeName: "Cycling 10km /Daily",
    startDate: "20-08-24",
    endDate: "20-08-24",
    status: "Rejected",
    challengers: "Abhay, Bindru, Ajmal, Akhil, Arun",
  },
  {
    key: "3",
    slNo: "03",
    challengeName: "Cycling 10km /Daily",
    startDate: "20-08-24",
    endDate: "20-08-24",
    status: "Accepted",
    challengers: "Abhay, Bindru, Ajmal, Akhil, Arun",
  },
  {
    key: "4",
    slNo: "04",
    challengeName: "Cycling 10km /Daily",
    startDate: "20-08-24",
    endDate: "20-08-24",
    status: "Accepted",
    challengers: "Abhay, Bindru, Ajmal, Akhil, Arun",
  },
];

const columns = [
  {
    title: "Sl No",
    dataIndex: "slNo",
    key: "slNo",
  },
  {
    title: "Challenge Name",
    dataIndex: "challengeName",
    key: "challengeName",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Challengers",
    dataIndex: "challengers",
    key: "challengers",
    render: (text: string) => (
      <span>
        {text} <RightOutlined />
      </span>
    ),
  },
  {
    title: "",
    key: "action",
    render: () => <Button shape="circle" icon={<EllipsisOutlined />} />,
  },
];

// const goalsData = [
//   {
//     id: 1,
//     type: "daily-steps",
//     title: "Daily Steps",
//     progress: 35,
//     currentValue: "2500 Steps",
//     goalPercentage: "35% Of Your Goal",
//     image: Steps,
//     unit: "steps",
//   },
//   {
//     id: 2,
//     type: "workout",
//     title: "Workout",
//     progress: 35,
//     currentValue: "1 Hour",
//     goalPercentage: "35% Of Your Goal",
//     backgroundColor: "",
//     image: Workout,
//     unit: "workout",
//   },
//   {
//     id: 3,
//     type: "cycling",
//     title: "Cycling",
//     progress: 25,
//     currentValue: "10 Km",
//     goalPercentage: "25% Of Your Goal",
//     backgroundColor: "",
//     image: Cycling,
//     unit: "cycling",
//   },
//   {
//     id: 4,
//     type: "water",
//     title: "Water",
//     progress: 75,
//     currentValue: "1.5 Litres",
//     goalPercentage: "75% Of Your Goal",
//     backgroundColor: "",
//     image: Water,
//     unit: "water",
//   },
//   {
//     id: 5,
//     type: "MoodDiary",
//     title: "MoodDiary",
//     progress: 75,
//     currentValue: "Good",
//     goalPercentage: "75% Of Your Goal",
//     backgroundColor: "",
//     image: MoodDiary,
//     unit: "mooddiary",
//   },
//   {
//     id: 6,
//     type: "Habits",
//     title: "Habits",
//     progress: 75,
//     currentValue: "60% Avoided",
//     goalPercentage: "75% Of Your Goal",
//     backgroundColor: "",
//     image: Habits,
//     unit: "habits",
//   },
// ];

const FitnessTrack: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isChallengeModalVisible, setIsChallengeModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isActivityModalVisible, setIsActivityModalVisible] = useState(false);
  const [isSetGoalModalVisible, setIsSetGoalModalVisible] = useState(false);
  const [acticityData, setActicityData] = useState<any[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<{
    id: number;
    title: string;
    type: string;
  } | null>(null);
  const [selectedUpdate, setSelectedUpdate] = useState<{
    id: number;
    title: string;
    type: string;
  } | null>(null);

  const goalsData = acticityData;
  const showChallengeModal = () => setIsChallengeModalVisible(true);
  const handleChallengeCancel = () => setIsChallengeModalVisible(false);

  const showUpdateModal = (id: number, title: string, type: string) => {
    setIsUpdateModalVisible(true);
    setSelectedUpdate({ id, title, type });
    setSelectedGoal({ id, title, type });
  };
  const handleUpdateCancel = () => setIsUpdateModalVisible(false);
  const handleSetGoalCancel = () => setIsSetGoalModalVisible(false);
  const [currentGoal, setCurrentGoal] = useState<any>(null);
  const handleAddSteps = (steps: number) => {
    setIsUpdateModalVisible(false);
  };
  const handleSetGoal = (steps: any) => {
    setIsSetGoalModalVisible(false);
  };

  const showActivityModal = () => setIsActivityModalVisible(true);
  const handleActivityCancel = () => setIsActivityModalVisible(false);
  const handleAddActivity = (activity: string) => {
    setIsActivityModalVisible(false);
  };

  const showSetGoalModal = (goal: any) => {
    setSelectedGoal(goal);
    setIsSetGoalModalVisible(true);
  };
  const showSetUpdateModal = (goal: any) => {
    setSelectedUpdate(goal);
    setIsUpdateModalVisible(true);
  };

  const getPackageDetails = async () => {
    try {
      const res = await dispatch(getallUserActivityAPI());
      const resJson = JSON.parse(JSON.stringify(res));
      const allResData = resJson?.payload;

      setActicityData(allResData?.data);
    } catch (error) {
      console.error("Error fetching package details:", error);
    } finally {
    }
  };
  const showActivitySummery = () => {
    history.push("/dashboard/activitysummery");
  };

  useEffect(() => {
    getPackageDetails();
  }, []);

  return (
    <div className="fitness-track-container">
      <div className="fitness-track">
        <div className="metric">
          <div className="metric-icon calories-icon">
            <div className="inner-icon">
              <Calories />
            </div>
          </div>
          <div className="metric-info">
            <span className="metric-label">Calories</span>
          </div>
          <div className="metric-value">75%</div>
        </div>

        <div className="metric">
          <div className="metric-icon bpm-icon">
            <div className="inner-icon">
              <Heart />
            </div>
          </div>
          <div className="metric-info">
            <span className="metric-label">BPM</span>
          </div>
          <div className="metric-value">75%</div>
        </div>

        <div className="metric">
          <div className="metric-icon water-icon">
            <div className="inner-icon">
              <Waterglass />
            </div>
          </div>
          <div className="metric-info">
            <span className="metric-label">Water</span>
          </div>
          <div className="metric-value">75%</div>
        </div>
      </div>

      {/* Monthly Progress Chart */}
      <div className="chart-container">
        <h3 className="chart-title">Monthly Progress</h3>
        <p className="chart-para">
          Progress <Purpledot /> Goals <Orangedot />
        </p>
        <ResponsiveContainer width="100%" height={140}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#7C4DFF"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="goals"
              stroke="#FFEB3B"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="fitness-goals-container">
        {goalsData?.map((goal: any) => (
          <div
            className={`goal-card ${goal?.type}`}
            key={goal.id}
            style={{ backgroundColor: goal?.backgroundColor }}
          >
            <div className="goal-head">
              <Image src={goal?.image ? goal?.image : Steps} />
              <h3 className="goal-title">{goal.activity_name}</h3>
            </div>
            <div className="goal-progress">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${goal?.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="goal-stats">
              {goal.activities.length > 0 && (
                <div key={goal.activities.length - 1}>
                  <p>
                    {`${
                      goal.activities[goal.activities.length - 1]
                        ?.goal_quantity || "0"
                    } ${
                      goal.activities[goal.activities.length - 1]?.name ||
                      "Unnamed"
                    }`}
                  </p>
                </div>
              )}

              <p className="goalPercentage">
                {goal?.goalPercentage ? goal?.goalPercentage : "0 %"}
              </p>
            </div>

            <div>
              <button
                className="set-goal-btn challenge"
                onClick={() => showSetGoalModal(goal)}
              >
                Set Goal
              </button>
            </div>
            <div className="goal-actions">
              <button
                className="goal-btn challenge"
                onClick={showChallengeModal}
              >
                Challenge
              </button>
              <button
                className="goal-btn update"
                onClick={() => showSetUpdateModal(goal)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Challenge Table */}

      <div className="challenge-list-container">
        <div className="challenge-list-header">
          <h3>Challenges</h3>
          <div>
            <Button
              className="Summery-btn me-4"
              onClick={() => showActivitySummery()}
            >
              Summery
            </Button>
            <Button className="activity-btn" onClick={showActivityModal}>
              <Plusicon /> &nbsp; Add Activity
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={challengeData}
          pagination={false}
          scroll={{ x: "max-content" }}
          className="responsive-table"
        />
      </div>

      {/* Modals */}
      <ChallengeModal
        visible={isChallengeModalVisible}
        onCancel={handleChallengeCancel}
      />
      <UpdateModal
        visible={isUpdateModalVisible}
        onCancel={handleUpdateCancel}
        // onAddSteps={handleAddSteps}
        goal={selectedUpdate}
        // onSetGoal={handleSetGoal}
        // setCurrentGoal={setCurrentGoal}
      />
      <ActivityModal
        visible={isActivityModalVisible}
        onCancel={handleActivityCancel}
        onAddActivity={handleAddActivity}
      />
      <SetGoal
        visible={isSetGoalModalVisible}
        onSetGoal={handleSetGoal}
        setCurrentGoal={setCurrentGoal}
        onCancel={handleSetGoalCancel}
        goal={selectedGoal}
      />
    </div>
  );
};

export default FitnessTrack;
