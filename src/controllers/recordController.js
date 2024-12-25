import recordService from "../services/recordService.js";

const getRecordForWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;
    try {
        const allWorkouts = recordService.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

export default {
    getRecordForWorkout
}