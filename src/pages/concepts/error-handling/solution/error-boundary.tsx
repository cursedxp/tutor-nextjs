import React, { Component, ErrorInfo, ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border-l-4 border-red-400">
          <h2 className="text-red-800 font-bold">Something went wrong</h2>
          <p className="text-red-700">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorProneComponent = () => {
  const [count, setCount] = React.useState(0);

  if (count === 3) {
    throw new Error("I crashed!");
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Error Prone Component</h3>
      <p className="mb-4">Click the button 3 times to trigger an error</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Count: {count}
      </button>
    </div>
  );
};

const ErrorBoundarySolution: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Error Boundary (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This solution demonstrates how to use React Error Boundaries to catch
          and handle errors in components.
        </p>

        <div className="mb-8 border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Error Boundary Example</h2>
          <ErrorBoundary>
            <ErrorProneComponent />
          </ErrorBoundary>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Catches JavaScript errors in component tree</li>
            <li>Displays fallback UI when errors occur</li>
            <li>Logs errors for debugging</li>
            <li>Provides error recovery option</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/starter/error-boundary"
          className="text-blue-600 hover:underline"
        >
          View Starter Version
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundarySolution;
