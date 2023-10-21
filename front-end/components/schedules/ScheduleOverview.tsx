import dayjs from "dayjs";
import React, { useState } from "react";
import { Schedule } from "../../types";

type Props = {
    schedules: Array<Schedule>;
};

const ScheduleOverview: React.FC<Props> = ({ schedules }: Props) => {
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule>(null);

    const selectSchedule = (schedule: Schedule) => {
        setSelectedSchedule(schedule);
    };

    return (
        <>
            {schedules && (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Course</th>
                            <th scope="col">Start</th>
                            <th scope="col">End</th>
                            <th scope="col">Lecturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule, index) => (
                            <tr>
                                <td>{schedule.course.name}</td>
                                <td>
                                    {dayjs(schedule.start).format(
                                        "DD-MM-YYYY HH:mm"
                                    )}
                                </td>
                                <td>
                                    {dayjs(schedule.end).format(
                                        "DD-MM-YYYY HH:mm"
                                    )}
                                </td>
                                <td>
                                    {schedule.lecturer.user.firstName +
                                        " " +
                                        schedule.lecturer.user.lastName}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default ScheduleOverview;
