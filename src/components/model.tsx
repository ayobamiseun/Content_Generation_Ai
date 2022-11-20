interface Products  {
 
    event:any;
    // value?: React.InputHTMLAttributes<HTMLInputElement>;
    // products?:  string | ReadonlyArray<string> | number | undefined;
    products:string;
    setProducts: React.Dispatch<React.SetStateAction<string>>;
    onFormSubmit: (e: React.FormEvent) => void
    heading: string | null;
    response: string | null;
}