const Create = () => {
  return (
    <form className="w-50 mx-auto my-5">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="text" name="age" className="form-control" required />
      </div>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          required
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          type="radio"
        />
        <label className="form-check-label">Female</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Create;
