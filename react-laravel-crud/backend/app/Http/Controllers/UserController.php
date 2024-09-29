<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return response()->json(User::get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
    
        // Create a new user
        try {
            User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
            ]);
    
            return response()->json(['message' => 'User successfully created'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create user', 'details' => $e->getMessage()], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $user = User::findOrFail($id);
        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Find the user by ID
        $user = User::findOrFail($id);
    
        // Validate the request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id, // Ignore the current user's email
            'password' => 'nullable|string|min:8', // Make password nullable (to allow updates without changing password)
        ]);
    
        try {
            // Update user fields
            $user->name = $request->name;
            $user->email = $request->email;
    
            // Only hash and update the password if it was provided
            if (!empty($request->password)) {
                $user->password = bcrypt($request->password); // Hash the password before saving
            }
    
            // Save updated user details
            $user->save();
    
            // Return success response
            return response()->json(['message' => 'User successfully updated'], 200);
        } catch (\Exception $e) {
            // Handle exceptions and return error response
            return response()->json(['error' => 'Failed to update user', 'details' => $e->getMessage()], 500);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            // Find the user by ID or fail if not found
            $user = User::findOrFail($id);
    
            // Delete the user
            $user->delete();
    
            // Return success response
            return response()->json(['message' => 'User successfully deleted'], 200);
        } catch (\Exception $e) {
            // Return error response in case of failure
            return response()->json(['error' => 'Failed to delete user', 'details' => $e->getMessage()], 500);
        }
    }
    
}
