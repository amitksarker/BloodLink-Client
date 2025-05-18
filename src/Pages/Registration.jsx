import React from 'react';

const Registration = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Please fill in the information to register. Your role will be set as <strong>donor</strong> by default.
      </p>
    </div>

    <form>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset space-y-3">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Full Name" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Avatar</label>
            <input type="file" name="avatar" className="file-input file-input-bordered w-full" required />

            <label className="label">Blood Group</label>
            <select name="bloodGroup" className="select select-bordered" required>
              <option disabled selected value="">Select blood group</option>
              <option>A+</option><option>A-</option>
              <option>B+</option><option>B-</option>
              <option>AB+</option><option>AB-</option>
              <option>O+</option><option>O-</option>
            </select>

            <label className="label">District</label>
            <select name="district" className="select select-bordered" required>
              <option disabled selected value="">Select district</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
              <option>Khulna</option>
              <option>Rajshahi</option>
              <option>Barishal</option>
              <option>Rangpur</option>
              <option>Sylhet</option>
              <option>Mymensingh</option>
              {/* You can populate this from an API or local JSON for full list */}
            </select>

            <label className="label">Upazila</label>
            <select name="upazila" className="select select-bordered" required>
              <option disabled selected value="">Select upazila</option>
              <option>Savar</option>
              <option>Gazipur</option>
              <option>Comilla</option>
              <option>Bagerhat</option>
              {/* Populate dynamically based on district later */}
            </select>

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />

            <label className="label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="input" placeholder="Confirm Password" required />

            <button className="btn btn-primary mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</div>

    );
};

export default Registration;